import { Hono } from 'hono';

import { cors } from 'hono/cors'



import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

// cores handling


// Create the main Hono app
const app = new Hono<{   // generic code  it means typecasting that wheneve dadabse_url used its basiclly means
    //  its alwais be string 
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET:string
	}
}>();


app.get('/', (c)=>{
	return c.json({
		message :"server form ok"
	})
})


//@ts-ignore

app.use('/api/*', cors())

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)


export default app;
