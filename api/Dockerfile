FROM python:3.12.1

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv 
RUN pipenv requirements > requirements.txt
RUN pip install -r requirements.txt

COPY . ./

CMD [ "python", "main.py" ]