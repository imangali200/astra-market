import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default definePayloadPlugin((nuxt)=>{
    const vuetify = createVuetify({
        ssr:true,
        components,
        directives
    });
    nuxt.vueApp.use(vuetify)
})