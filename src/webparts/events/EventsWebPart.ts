import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './Events.module.scss';
import * as strings from 'eventsStrings';
import { IEventsWebPartProps } from './IEventsWebPartProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as Config from '../../KeyValueConfig';
export default class EventsWebPart extends BaseClientSideWebPart<IEventsWebPartProps> {

  public constructor() {
    super();
    SPComponentLoader.loadCss(Config.bootstrapScoped.bootstrap);
  }

  public render(): void {
    this.domElement.innerHTML = `  
      
      <div class="${styles.events}">
        <div class="bootstrap">
          <div class="list-group">
            <a href="#" class="list-group-item active">
              <b>Upcoming Events</b>
            </a>
            <a href="#" class="list-group-item"><span class="badge">May 3, 2017</span>&nbsp; HR Connect</a>
            <a href="#" class="list-group-item"><span class="badge">May 4, 2017</span>&nbsp; CEO Connect</a>
            <a href="#" class="list-group-item"><span class="badge">May 5, 2017</span>&nbsp; Annual Sports</a>
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
