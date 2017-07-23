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
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as Config from '../../KeyValueConfig';
import pnp from "sp-pnp-js";

export default class AlertWebPart extends BaseClientSideWebPart<IAlertWebPartProps> {
  
  public constructor() {
    super();
    SPComponentLoader.loadCss(Config.bootstrapScoped.bootstrap);    
  }

  public render(): void {
    pnp.sp.web.get().then(r =>{
      console.log(r);
      this.domElement.innerHTML = ` 
      <div>${r.Title}</div>
      <div>${r.Url}</div>
      <div class="${styles.alert}"> 
        <div class="bootstrap">
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
                PropertyPaneTextField('Title', {
                  label: 'WebPart Title'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
