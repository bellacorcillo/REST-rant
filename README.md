# Project REST-Rant

REST-Rant is an app where users can review restaurants.

ROUTES

| METHOD          | PATH                     | PURPOSE                                             |
| -------------   |:-------------:           | -----:                                              |
| GET             | /                        | Home Page                                           |   
| GET             | /places                  |   Places Index Page                                 |
| POST            | /places                  |    Create New Place                                 |
| GET             | /places/new              |    Form page for creating new place                 |
| GET             | /places/:id              |    Details about a particular place                 |
| PUT             | /places/:id              |    Update a particular place.                       |
| GET             | /places/:id/edit         |    Form page for editing an existing place          |
| DELETE          | /places/:id              |    Delete a particular place                        |
| POST            | /places/:id/rant         |    Create a rant (comment) about a particular place |
| DELETE          | /places/:id/rant/:rantId |    Delete a rant (comment) about a particular place |
| GET             | *                        |    404 Page (matches any route not defined above.   |

## Data for places
- [x] name (string)
- [x] city (string)
- [x] state (string)
- [x] cuisines (string)
- [x] pic (string)
