class ApiResponse{
  constructor(statusode,data,message="Success"){
    this.statusCode = statusode;
    this.data = data;
    this.message = message;
    this.success = statusCode <400;
}}