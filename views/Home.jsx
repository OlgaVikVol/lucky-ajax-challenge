const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title, die, roll }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Simplest Possible AJAX</h1>
        <p>This contrived app will simulate a roll of a n-sided dice.</p>

        <form id="form" method="post" action="/rolls">
          <p>
            <label htmlFor="sides">
              How many sides?
              <input id="sides" name="sides" type="number" placeholder="optional - default=6" />
            </label>
          </p>
          <p><input id="click" type="submit" value="Roll the Dice" /></p>
        </form>

        <div id="die-container">
          {die
            && (
              <div className="die">
                <span id="number" className="roll">
                  {roll}
                </span>
              </div>
            )}
        </div>

      </div>
    </Layout>
  );
};
