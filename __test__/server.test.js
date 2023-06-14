'use strict'

const supertest = require('supertest');
const { app } = require('../src/server');

const req = supertest(app);


describe('Server test', ()=>{
    
    it('Handle the root path', async ()=> {
        const res = await req.get('/');
        expect(res.status).toEqual(200);
        expect(res.body.message).toEqual('Welcome to the Home page :)');
    })

    it('The name is valid with the /person route', async ()=> {
        const res = await req.get('/person?name=sham');
        expect(res.status).toEqual(200);
    })


})