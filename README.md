# Portfolio embedding policy

## Portfolio-only live previews

Public pages may be framed only by `https://sakib-studio.netlify.app`. Private/admin/account/API routes retain `X-Frame-Options: DENY` and `frame-ancestors 'none'`. Keep these exceptions when regenerating Netlify headers. This permits the owner’s responsive live portfolio previews without opening the site to arbitrary framing.
