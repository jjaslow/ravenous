const apiKey = 'DxvSfb1QfijZ0M66OI73CiBfLJwdNo-y3wNm-rtybSHkPsNIcef8DmzjNMsvs5_x26bBLRbHJmAq9kti6SDm2aZKC78jZg_YJS5PJW6qgr_Ax6tYRnnk6YqTaedvWnYx';

export const Yelp = {

search(term, location, sortBy){

  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization : `Bearer ${apiKey}`}}   ).then(
    response => response.json() ).then(
      jsonResponse => {if(jsonResponse.businesses)
      {return jsonResponse.businesses.map(business =>
        { id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
      }
    );
  }}
);

}

};
