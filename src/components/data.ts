type gridTypes = 'grid' | 'carousel';

interface visualDevGridItem {
  type: gridTypes;
  name: string;
  src: string[];
  width?: string;
  height?: string;
  gridTemplateMap?: string[];
}

function buildVisualDevGridItem(
  type: gridTypes,
  pathObject: Record<string, unknown>,
  name: string,
  width?: string,
  height?: string,
  gridTemplateMap?: string[],
): visualDevGridItem {
  let acc: visualDevGridItem = { type: type, name: name, src: [] };

  if (width) {
    acc['width'] = width;
  }

  if (height) {
    acc['height'] = height;
  }

  if (gridTemplateMap) {
    acc['gridTemplateMap'] = gridTemplateMap;
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

  const gridDiscotecaPathObject = import.meta.glob('/src/assets/images/visualdev/discoteca/*');
  visualDevGridObject.push(
    buildVisualDevGridItem('grid', gridDiscotecaPathObject, 'Discoteca Universul', '60vw', 'auto', [
      'a a a',
      'b b b',
      'c d e',
      'f g h',
    ]),
  );

  const carouselAbrenhedPathObject = import.meta.glob('/src/assets/images/visualdev/abrenhed/*');
  visualDevGridObject.push(
    buildVisualDevGridItem(
      'carousel',
      carouselAbrenhedPathObject,
      'Abrenhed Malediction',
      '45vw',
      'auto',
    ),
  );

  const carouselAsimpthomaPathObject = import.meta.glob(
    '/src/assets/images/visualdev/asimpthoma/*',
  );
  visualDevGridObject.push(
    buildVisualDevGridItem('carousel', carouselAsimpthomaPathObject, 'Asimpthoma', '60vw', 'auto'),
  );

  return visualDevGridObject;
}

export { loadVisualDevMedia };
