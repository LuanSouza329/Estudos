FROM python:3.9
WORKDIR /app
COPY dependencias.txt .
RUN pip install-r dependencias.txt
COPY . .
CMD ["python", "app.py"]