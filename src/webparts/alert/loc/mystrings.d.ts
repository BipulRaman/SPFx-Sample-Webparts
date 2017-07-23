declare interface IAlertStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'alertStrings' {
  const strings: IAlertStrings;
  export = strings;
}
