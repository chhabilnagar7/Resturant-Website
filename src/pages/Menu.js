import React from 'react'
import Layout from '../components/Layout-file/Layout';
import { MenuList } from '../Data/data';
import {  Box, Card, CardActionArea, CardContent, CardMedia, Typography,} from "@mui/material";
const Menu = () => {
  return (
    <Layout>
     <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "400px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  )
}

export default Menu
