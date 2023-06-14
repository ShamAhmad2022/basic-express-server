'use strict'

const supertest = require('supertest');
const { app } = require('../src/server');

const req = supertest(app);


describe('Paage not Found', ()=>{
    it('Handle not foound page method', async ()=> {
        const res = await req.get('/person?name=23');
        expect(res.status).toEqual(500);
    });
});