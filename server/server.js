const  express=require("express");
const  cors=require("express");
const bodyparser=require("body-parser");
const { response } = require("express");
//初始化app
const  app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors({origin:true,credentials:true}));




const   stripe=require("stripe")("sk_test_OuBSGBMaM4oSMiEffDws6bgo");
app.post("/checkout",async (request,reponse,next)=>{
    try{
        const session=await stripe.checkout.sessions.create({
           line_items:request.body.items.map((item)=>({
                    price_data:{
                    currency:"usd",
                        product_data:{
                            name:item.name,
                            images:[item.product]
                        },
                     unit_amount:item.price*100   
                    },
                    quantity:item.quantity
            }     
           )),
           mode:"payment",
           success_url:"http://localhost:4242/success.html", 
           cancel_url:"http://localhost:4242/cancel.html"   
        });
        response.status(200).json(session);
    }catch(error){
        next(error);
    }
    app.listen(4242,()=>console.log("app is running on 4242  .  app正在运行在4242"))

});
