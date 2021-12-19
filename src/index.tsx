import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: { //bd interno do miragejs
    transaction: Model //tabela/entidade !!! SEmpre começa vazio
    
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-12 11:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions' , () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data); //first param: model onde será inserido e os dados que serão inseridos
    })
  }
})
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
