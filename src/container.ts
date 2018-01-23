import { Container } from 'inversify'
import{ UsersService } from './users-service'
import{ HttpClient } from './htttp-client'
import { TYPES } from './types'
import getDecorators from 'inversify-inject-decorators'

const container = new Container()

container.bind<UsersService>(TYPES.UsersService).to(UsersService)
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient)

const { lazyInject } = getDecorators(container)

export { container, lazyInject }