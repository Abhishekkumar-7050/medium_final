import z from "zod";

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SignupInput = z.infer<typeof signupInput>

export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
})

export type SigninInput = z.infer<typeof signinInput>

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})
export type CreateBlogInput = z.infer<typeof createBlogInput>

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})
export type UpdateBlogInput = z.infer<typeof updateBlogInput>

 // here we introduing the one extra thing  type infrence
 // this is used to input type refrence to the  frontend  eve backen
 // here also  we are introducing the monorepe like some thig which is come in the picture  which is come after the  npm 7
 // meneorepo is nothing  publish the  modules on the npm


// @abhi/medium-common@1.0.0 