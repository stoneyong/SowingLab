if(!process.env.NODE_EVN) {
    process.env.NODE_EVN = 'development';
}
const express = require('express');
const webpack = require('webpack');
const path = require('path');

