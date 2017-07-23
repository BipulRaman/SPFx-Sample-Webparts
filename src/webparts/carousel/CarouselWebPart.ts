import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Carousel.module.scss';
import * as strings from 'carouselStrings';
import { ICarouselWebPartProps } from './ICarouselWebPartProps';

import { SPComponentLoader } from '@microsoft/sp-loader';
import * as Config from '../../KeyValueConfig';

export default class CarouselWebPart extends BaseClientSideWebPart<ICarouselWebPartProps> {

  public constructor() {
    super();
    SPComponentLoader.loadCss(Config.bootstrapScoped.bootstrap);    
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.carousel}">
        <div class="bootstrap">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="https://bipulr.sharepoint.com/ImageSlider/Image1.jpg" alt="...">
                <div class="carousel-caption">
                  <h3>Highway</h3>
                  <p>A beautiful Highway</p>
                </div>
              </div>
              <div class="item">
                <img src="https://bipulr.sharepoint.com/ImageSlider/Image2.jpg" alt="...">
                <div class="carousel-caption">
                  <h3>Waterfall</h3>
                  <p>A beautiful waterfall</p>
                </div>
              </div>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          </div>
      </div>
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
      <script type="text/javascript" src="https://bipulr.sharepoint.com/CDN/js/bootstrap.min.js"></script>      
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
