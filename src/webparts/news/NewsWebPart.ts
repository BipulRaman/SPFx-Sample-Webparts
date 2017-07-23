import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './News.module.scss';
import * as strings from 'newsStrings';
import { INewsWebPartProps } from './INewsWebPartProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as Config from '../../KeyValueConfig';
export default class NewsWebPart extends BaseClientSideWebPart<INewsWebPartProps> {

  public constructor() {
    super();
    SPComponentLoader.loadCss(Config.bootstrapScoped.bootstrap); 
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.news}">
        <div class="bootstrap ">
        <div class="list-group">
          <a href="#" class="list-group-item active">
            <b>Organigational News</b>
          </a>
          <a href="#" class="list-group-item"><span class="badge">May 3, 2017</span>&nbsp; Organisational Announcement by New CEO</a>
          <a href="#" class="list-group-item"><span class="badge">May 4, 2017</span>&nbsp; Yammer launched as Corporate Social Network</a>
          <a href="#" class="list-group-item"><span class="badge">May 5, 2017</span>&nbsp; Migrating to Office365</a>
          <a href="#" class="list-group-item"><span class="badge">May 7, 2017</span>&nbsp; New office inaugration at Lahore</a>
        </div>
      </div>
      </div>      
      `;
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
