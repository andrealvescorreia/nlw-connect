import { defineConfig } from 'orval'
import env from './env'

export default defineConfig({
  api: {
    input: `${env.apiUrl}/docs/json`,
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true, // apaga o arquivo anterior ao gerar um novo.
      baseUrl: env.apiUrl,
      override: {
        fetch: {
          includeHttpResponseReturnType: false, // por padrão o orval pega os status code (ex: 200, 403, etc). Essa opção desativa isso.
        },
      },
    },
  },
})

// npx orval -> gera a tipagem em typescript de todas as rotas do backend, a partir da documentação swagger. Necessário que o backend esteja em execução antes de executar este comando.
