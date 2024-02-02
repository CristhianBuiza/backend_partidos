module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: "127.0.0.1",
            port: 6379,
            db: 0,
          },
          settings: {
            debug: true,
          },
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "redis",
        options: {
          max: 32767,
          connection: "default",
        },
      },
      strategy: {
        enableEtagSupport: true,
        logs: true,
        clearRelatedCache: true,
        maxAge: 3600000,
        contentTypes: ['api::calendario.calendario',
      'api::inicio-configuracion.inicio-configuracion',
      'api::publicidad.publicidad',
      'api::web-configuracion.web-configuracion',
      ],
      },
    },
  },
});
