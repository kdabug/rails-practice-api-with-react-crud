class StudentsController < ApplicationController
   
    def index
      @students = Student.all
      render json: { message: "ok", students: @students }
    end
  
    def show
      begin
        @student = Student.find(params[:id])
        render json: { message: "ok", student: @student }
      rescue ActiveRecord::RecordNotFound
        render json: { message: 'no student matches that ID' }, status: 404
      rescue StandardError => e
        render json: { message: e.to_s }, status: 500
      end
    end
  

end
