

export interface HttpError {
  error: [ 
    { 'cod': '403', 'description' : 'Proibido / Desconhecido'},
    { 'cod': '404', 'description' : 'Não Encontrado'},
    { 'cod': '500', 'description' : 'Erro de Servidor Interno'},
    { 'cod': '503', 'description' : 'Serviço Indisponível'},
    { 'cod': '404', 'description' : 'Não Encontrado'}
  ]
  
}