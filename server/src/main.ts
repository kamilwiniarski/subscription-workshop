import { NestFactory } from "@nestjs/core"
import { SubscriptionsModule } from "./subscriptions.module"

async function bootstrap() {
  const app = await NestFactory.create(SubscriptionsModule)
  app.enableCors()
  await app.listen(3000)
}
bootstrap()
