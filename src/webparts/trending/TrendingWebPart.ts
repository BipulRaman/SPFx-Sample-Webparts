import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Trending.module.scss';
import * as strings from 'trendingStrings';
import { ITrendingWebPartProps } from './ITrendingWebPartProps';

import { SPComponentLoader } from '@microsoft/sp-loader';
import * as Config from '../../KeyValueConfig';

export default class TrendingWebPart extends BaseClientSideWebPart<ITrendingWebPartProps> {

  public constructor() {
    super();
    SPComponentLoader.loadCss(Config.bootstrapScoped.bootstrap);    
  }
  
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.trending}">
        <div class="bootstrap">
        <div class="list-group">
          <a href="#" class="list-group-item active">
            Trending Article
          </a>
          <a href="#" class="list-group-item">Organisational Announcement by New CEO</a>
          <a href="#" class="list-group-item">Yammer launched as Corporate Social Network</a>
          <a href="#" class="list-group-item">Migrating to Office365</a>
          <a href="#" class="list-group-item">New office inaugration at Lahore</a>
        </div>
        </div>
      </div>`;
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
