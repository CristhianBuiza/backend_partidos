import type { Schema, Attribute } from '@strapi/strapi';

export interface OpcionOpcion extends Schema.Component {
  collectionName: 'components_opcion_opcions';
  info: {
    displayName: 'opcion';
    icon: 'expand';
    description: '';
  };
  attributes: {
    url: Attribute.Text;
    canal: Attribute.Relation<'opcion.opcion', 'oneToOne', 'api::canal.canal'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    structuredData: Attribute.JSON;
  };
}

export interface VideoVideo extends Schema.Component {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'Opciones Video';
    icon: 'play';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    id_video: Attribute.UID &
      Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
    video: Attribute.Component<'opcion.opcion', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'opcion.opcion': OpcionOpcion;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'video.video': VideoVideo;
    }
  }
}
