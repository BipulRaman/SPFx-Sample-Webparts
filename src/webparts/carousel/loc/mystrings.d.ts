declare interface ICarouselStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'carouselStrings' {
  const strings: ICarouselStrings;
  export = strings;
}
