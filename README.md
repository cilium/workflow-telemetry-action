# workflow-telemetry-action

A GitHub Action to track and monitor the workflow runs, jobs and steps of your
GitHub Action workflow runs. This fork receives minimal maintenance from Cilium
committers.

### Example Output

An example output of a simple workflow run will look like this.

![Step Trace Example](/images/step-trace-example.png)

## Usage

To use the action, add the following step before the steps you want to track.

```yaml
permissions:
  pull-requests: write
jobs:
  workflow-telemetry-action:
    runs-on: ubuntu-latest
    steps:
      - name: Collect Workflow Telemetry
        uses: cilium/workflow-telemetry-action@v2
```

## Configuration

| Option                       | Requirement       | Description
|------------------------------| ---               | ---
| `github_token`               | Optional          | An alternative GitHub token, other than the default provided by GitHub Actions runner.
| `metric_frequency`           | Optional          | Metric collection frequency in seconds. Must be a number. Defaults to `5`.
| `proc_trace_min_duration`    | Optional          | Puts minimum limit for process execution duration to be traced. Must be a number. Defaults to `-1` which means process duration filtering is not applied.
| `proc_trace_sys_enable`      | Optional          | Enables tracing default system processes (`aws`, `cat`, `sed`, ...). Defaults to `false`.
| `proc_trace_chart_show`      | Optional          | Enables showing traced processes in trace chart. Defaults to `true`.
| `proc_trace_chart_max_count` | Optional          | Maximum number of processes to be shown in trace chart (applicable if `proc_trace_chart_show` input is `true`). Must be a number. Defaults to `100`.
| `proc_trace_table_show`      | Optional          | Enables showing traced processes in trace table. Defaults to `true`.
| `comment_on_pr`              | Optional          | Set to `true` to publish the results as comment to the PR (applicable if workflow run is triggered by PR). Defaults to `true`. <br/> Requires `pull-requests: write` permission
| `job_summary`                | Optional          | Set to `true` to publish the results as part of the [job summary page](https://github.blog/2022-05-09-supercharging-github-actions-with-job-summaries/) of the workflow run. Defaults to `true`.
| `theme`                      | Optional          | Set to `dark` to generate charts compatible with Github **dark** mode. Defaults to `light`.
