import {createClient} from 'contentful'

const contentfulClient = createClient({
  space: 'cto5duglwayf',
  accessToken: '3ddfcefee5defc5349820ce9383281722f4fc988d29a0d22d5947d60a4c4aa45'
})

export default contentfulClient