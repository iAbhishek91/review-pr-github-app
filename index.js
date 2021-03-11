/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log.info('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    context.log.info(context);
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' });
    return context.github.issues.createComment(issueComment);
  })

  app.on(["pull_request.reopened", "pull_request.opened"], async context => {
    const pr_comment = context.issue({body: 'Thanks for opening a PR with us'});
    return context.github.issues.createComment(pr_comment)
  });

  app.on(["pull_request.reopened", "pull_request.opened"], async context => {
    const label = context.issue({labels: '["bug"]'});
    return context.github.issues.addLabels(label);
  });

  app.on('pull_request.closed', async context => {
    context.log.info(context.payload.pull_request.merged);
  });
}
