from flask import Flask, render_template, jsonify, send_from_directory, redirect, url_for
import os
import logging
from logging.handlers import RotatingFileHandler
from src.utils import message_channel
from dotenv import load_dotenv


def create_app():
    app=Flask(__name__)

    @app.route('/')
    def index():
        return 'Hello World'

    return app


app = create_app()


if __name__ == '__main__':
    app.run(debug=True)