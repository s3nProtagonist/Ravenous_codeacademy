const apiKey = 'lxclrhGwH-PlJINQujK9B5umVU0Jeeh2yJcTcDRgDQB3Lls8EYrvvUUwdlp5wY71T8xFo2Q_h7YpLcPiEmp52CxQsyXDWQdxIG82TnRlt8bQcY3X2XgyGrLJ5O9MYHYx';
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
        }).then(jsonResponse => {
               if(jsonResponse.businesses){
                   return jsonResponse.businesses.map(business => {
                       console.log(business);
                       return {
                           id: business.id,
                           imageSrc: business.image_url,
                           name: business.name,
                           aadress: business.location.aadress1,
                           city: business.location.city,
                           state: business.location.state,
                           zipCode: business.location.zip_code,
                           category: business.categories.title,
                           rating: business.rating,
                           reviewCount: business.review_count

                       };
                   });
               }
           } 
        );

    }
};

export default Yelp;