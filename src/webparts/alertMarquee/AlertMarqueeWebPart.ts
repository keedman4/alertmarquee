import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AlertMarqueeWebPartStrings';
import AlertMarquee from './components/AlertMarquee';
import { IAlertMarqueeProps } from './components/IAlertMarqueeProps';
import { PropertyFieldDateTimePicker, DateConvention, TimeConvention, IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';

export interface IAlertMarqueeWebPartProps {
  description: string;
  Title:string;
  Excerpts:string;
  
}

export default class AlertMarqueeWebPart extends BaseClientSideWebPart<IAlertMarqueeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAlertMarqueeProps> = React.createElement(
      AlertMarquee,
      {
        description: this.properties.description,
        Title:this.properties.Title,
        Excerpts:this.properties.Excerpts
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
