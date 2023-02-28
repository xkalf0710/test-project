import db from '$lib/db'
import type { Actions, PageServerLoad} from './$types'

export const actions: Actions = {
    login: async({request}) => {{
            const data = Object.fromEntries(await request.formData()) as {
                email: string
                password: string
            }

            await db.user.create({
                data: {...data, isAdmin: false}
            })
    }}
};