export interface SDRConfig {
  DAM: {
    templateContainerProjectType: string,
    templateProjectType: string
  },
  clientBroswerApp: {
    header: {
      logo: {
        url: string
      }
    },
    leftNavbar: {
      teamSelection: {
        l1Dropdown: {
          label: string
        },
        l2Dropdown: {
          label: string
        }
      },
      filters: [
        {
          slug: string,
          type: string,
          name: string,
          expanded: string,
          alwaysDisplayFirst: [],
          sort: string,
          mapsTo: string,
          order: number,
          selected: [string]
        },
      ]
    },
    main: {},
    footer: {}
  }
}
