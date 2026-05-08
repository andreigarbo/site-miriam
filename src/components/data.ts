interface visualDevGridItem {
  name: string;
  src: string[] | string;
  width?: string;
  height?: string;
}

function buildVisualDevGridItem(
  pathObject: Record<string, unknown> | string,
  name: string,
  width?: string,
  height?: string,
): visualDevGridItem {
  let acc: visualDevGridItem = { name: name, src: '' };

  if (width) {
    acc['width'] = width;
  }

  if (height) {
    acc['height'] = height;
  }

  if (typeof pathObject === 'string') {
    acc.src = pathObject;
    return acc;
  }

  const thisCarousel = new Array<string>();

  for (const key in pathObject) {
    thisCarousel.push(key);
  }

  acc.src = thisCarousel;
  return acc;
}

function loadVisualDevMedia(): visualDevGridItem[] {
  const visualDevGridObject: visualDevGridItem[] = new Array<visualDevGridItem>();

  const carouselAbrenhedPathObject = import.meta.glob('/src/assets/images/visualdev/abrenhed/*');

  visualDevGridObject.push(
    buildVisualDevGridItem(carouselAbrenhedPathObject, 'Abrenhed Malediction', '45vw', 'auto'),
  );

  const carouselAsimpthomaPathObject = import.meta.glob(
    '/src/assets/images/visualdev/asimpthoma/*',
  );
  visualDevGridObject.push(
    buildVisualDevGridItem(carouselAsimpthomaPathObject, 'Asimpthoma', '60vw', 'auto'),
  );

  const carouselDiscotecaPathObject = import.meta.glob('/src/assets/images/visualdev/discoteca/*');
  visualDevGridObject.push(
    buildVisualDevGridItem(carouselDiscotecaPathObject, 'Discoteca Universul', '60vw', 'auto'),
  );

  return visualDevGridObject;
}

export { loadVisualDevMedia };
