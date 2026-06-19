type userAnalyticsData = {
  continent_code: string;
  country_code: string;
  country_name: string;
  city: string;
  fingerprint: string;
};

function analyticsNecessary(): boolean {
  const lastAnalyticsTimestamp = localStorage.getItem('LAST_ANALYTICS_TIMESTAMP');
  if (
    !lastAnalyticsTimestamp ||
    (lastAnalyticsTimestamp && Date.now() - parseInt(lastAnalyticsTimestamp) > 3600000)
  ) {
    localStorage.setItem('LAST_ANALYTICS_TIMESTAMP', Date.now().toString());
    return true;
  }
  return false;
}

async function generateHash(stringToHash: string): Promise<string> {
  const textAsBuffer = new TextEncoder().encode(stringToHash);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map((item) => item.toString(16).padStart(2, '0')).join('');
  return hash;
}

async function getUserFingerprint(components: string[]): Promise<string> {
  let fingerprint = '';
  const plainString = components.join('|');
  fingerprint = await generateHash(plainString);
  return fingerprint;
}

async function runAPICall() {
  let response = await fetch('https://ipapi.co/json/').catch((error) =>
    console.error('Error fetching location data: ', error),
  );
  return response!.json();
}

async function reportAnalyticsData() {
  if (!analyticsNecessary()) {
    return;
  }

  const analyticsData: userAnalyticsData = {} as userAnalyticsData;

  let returnedData = await runAPICall();
  let userFingeprint = await getUserFingerprint([
    returnedData.ip,
    returnedData.city,
    returnedData.country,
  ]);

  analyticsData.continent_code = returnedData.continent_code;
  analyticsData.country_code = returnedData.country_code;
  analyticsData.country_name = returnedData.country_name;
  analyticsData.city = returnedData.city;
  analyticsData.fingerprint = userFingeprint;
  console.log(analyticsData);

  //here, need to store the data in some sort of back end
}

export { reportAnalyticsData };
