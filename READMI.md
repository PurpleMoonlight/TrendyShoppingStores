## 项目简介
    商品列表展示以及购物车操作，本项目学习自网络，欢迎下载。
    作为学习交流使用。

## 项目数据源(使用免费的storeAPI)

    接口使用文档地址
    https://fakestoreapi.com/

## Angular框架

    采用angular+tailwindcss搭建。

## 项目版本号

    angular/cli@14.2.1

## 项目搭建简介

    https://note.youdao.com/s/BeP9MRtX



## 项目功能  ~~~~~~~~~

1.  
    --->商品详情页
    --->实现购物车功能
    --->页面分类展示  
    --->排序搜索   
    --->数量分类展示


2.  --->添加购物车    
    --->清空购物车  
    --->向购物车添加商品  
    --->从购物车中移除商品

3.  --->购物车列表
    --->商品价格联动计算
    --->价格总计  

4.支付====.........待续




## 依赖版本记录

 "dependencies": {
    "@angular/animations": "^14.0.0",
    "@angular/cdk": "^13.0.0",
    "@angular/common": "^14.0.0",
    "@angular/compiler": "^14.0.0",
    "@angular/core": "^14.0.0",
    "@angular/forms": "^14.0.0",
    "@angular/material": "^13.0.0",
    "@angular/platform-browser": "^14.0.0",
    "@angular/platform-browser-dynamic": "^14.0.0",
    "@angular/router": "^14.0.0",
    "@stripe/stripe-js": "^1.35.0",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^14.2.1",
    "@angular/cli": "~14.2.1",
    "@angular/compiler-cli": "^14.0.0",
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.2.7",
    "typescript": "~4.7.2"
  }
}




## 支付功能

npm i  cors@2.8.5  express@4.18.1   stripe@10.7.0 

npm i @stripe/stripe-js@1.35.0

note: 支付功能需注册stripe账号,支付功能待实现。



## 启动命令
    进入项目目录下输入命令。
    ng   serve
