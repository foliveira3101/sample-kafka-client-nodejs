# sample-kafka-client-nodejs
## NodeJs + TypeScript + Docker + Apache Kafka
Projeto que simula o uso do **Apache Kafka** como broker de mensageria usando a lib kafkajs para **NodeJS**.

### Subir instância do Kafka e Zookeper **(docker)**
```
cd /kafha/
docker-compose up -d
```

### Build do projeto
```
  cd /ecommerce -> root folder
  npm install
  npm run compile
```

### Executar os **CONSUMERS**
```
  node ../dist/services/email-service/EmailService.js
  node ../dist/services/fraud-detector-service/FraudDetectorService.js
```

### Executar os **PRODUCER**
```
  node ../dist/services/new-order-service/index.js  
```
