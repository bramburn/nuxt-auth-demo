import { Vue } from 'nuxt-property-decorator'
import { Auth } from '@nuxtjs/auth'

declare module '*.vue' {
  export default Vue
  // custom interface merges for VUE to add $auth as optional data.
  export interface Vue{
    $auth?:Auth;
  }
}
