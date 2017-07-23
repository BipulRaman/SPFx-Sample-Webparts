declare interface ITrendingStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'trendingStrings' {
  const strings: ITrendingStrings;
  export = strings;
}
