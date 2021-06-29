import createRepository from '~/apis/repository.js'
export default (ctx, inject) => {
    const repositoryWithAxios = createRepository(ctx.$axios)
    const repositories = {
        auth: repositoryWithAxios('/admin'),
        users: repositoryWithAxios('/users'),
        accounts: repositoryWithAxios('/accounts'),
        notifications: repositoryWithAxios('/notifications'),
        summaries: repositoryWithAxios('/notifications/summary'),
        
    }
    inject('repositories', repositories)
}