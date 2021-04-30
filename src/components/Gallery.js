// import * as React from "react";
// import ImageList from "@material-ui/core/ImageList";
// import ImageListItem from "@material-ui/core/ImageListItem";
// import ImageListItemBar from "@material-ui/core/ImageListItemBar";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import IconButton from "@material-ui/core/IconButton";
// import InfoIcon from "@material-ui/icons/Info";

// const Gallery = () => {
//     const itemData = [{
//         img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//         title: 'Bike',
//         author: '@southside_customs',
//         cols: 2,
//       },]
//   return (
//     <ImageList sx={{ width: 500, height: 450 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">December</ListSubheader>
//       </ImageListItem>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
//                 ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={item.author}
//             actionIcon={
//               <IconButton
//                 sx={{ color: "rgba(255, 255, 255, 0.54)" }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };

// export default Gallery;
