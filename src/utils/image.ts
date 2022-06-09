import { stringifyQuery } from 'vue-router';

export type ImageParam = {
  src: string;
  width: number;
  crop?: boolean;
};
export function responsifyImageSource({
  src,
  width,
}: ImageParam) {
  if (src?.includes('?')) {
    throw new Error('Invalid image src');
  }

  // TODO: height + crop handling
  return `https://heroheroco-clim-static.b-cdn.net/about${src}?${stringifyQuery({ width })}`;
}

type SizeDeclaration = number | string;
export type ImageSizeOption =
  | SizeDeclaration
  | [SizeDeclaration, { crop?: boolean }];
export function responsifyImageSourceSet(
  main: ImageParam,
  sources: ImageSizeOption[]
) {
  const fixedPaths = sources.map((source) => {
    let newWidth;
    let marker;
    let _source = source;
    let crop = false;

    if (Array.isArray(source)) {
      _source = source[0];
      crop = !!source[1].crop;
    }

    if (typeof _source === 'string') {
      // string only Size Option, use main to derive the data
      if (_source.includes('x')) {
        const modifier = Number(_source.replace('x', ''));
        newWidth = main.width * modifier;
        marker = _source;
      } else {
        throw new Error(`Unrecognized srcset option`);
      }
    } else if (typeof _source === 'number') {
      marker = `${_source}w`;
      newWidth = _source;
    }

    const newSrc = responsifyImageSource({
      ...main,
      width: newWidth,
      crop,
    });

    return `${newSrc} ${marker}`;
  });

  return fixedPaths.join(',');
}
