import React from "react";
// nodejs library that concatenates classes
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Card, CardContent, CardActions, Typography, CardMedia, Button, CardHeader, IconButton, Badge, Divider, Avatar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Products from "./products";

const homePage = () => {

    return (
            <div className="contents">
            <Products/>
            </div>
    );
}
export default homePage;