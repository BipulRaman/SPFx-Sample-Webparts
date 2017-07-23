declare interface INewsStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'newsStrings' {
  const strings: INewsStrings;
  export = strings;
}
