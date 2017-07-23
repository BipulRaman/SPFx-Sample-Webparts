import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './Alert.module.scss';
import * as strings from 'alertStrings';
import { IAlertWebPartProps } from './IAlertWebPartProps';

import * as Config from '../../KeyValueConfig';

import pnp from "sp-pnp-js";

import { SPComponentLoader } from '@microsoft/sp-loader';
export default class AlertWebPart extends BaseClientSideWebPart<IAlertWebPartProps> {
  
  public constructor() {
    super();
    SPComponentLoader.loadCss("https://your-css-library-url");    
  }

  public render(): void {
    pnp.sp.web.get().then(r => {    
    console.log(r);
    this.domElement.innerHTML = ` 
    <div class="${styles.alert}"> 
      <div class="bootstrap">
        <div><h3>Welcome to ${r.Title}</h3><div>
        <div class="alert alert-danger" style="margin-bottom: 0px;" role="alert">Warning! Office closed due to Tsunami warning. <a href="#" class="alert-link">Read More</a></div>
      </div>
    `;
   });

    
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
