import * as core from '@actions/core'
import * as stepTracer from './stepTracer'
import * as statCollector from './statCollector'
import * as processTracer from './processTracer'
import * as logger from './logger'

async function run(): Promise<void> {
  try {
    logger.info(`Initializing ...`)

    const enable_step_tracer = core.getInput('enable_step_tracer')
    const enable_stat_collector = core.getInput('enable_stat_collector')
    const enable_process_tracer = core.getInput('enable_process_tracer')

    if (enable_step_tracer === 'true') {
      // Start step tracer
      await stepTracer.start()
    }

    if (enable_stat_collector === 'true') {
      // Start stat collector
      await statCollector.start()
    }

    if (enable_process_tracer === 'true') {
      // Start process tracer
      await processTracer.start()
    }

    logger.info(`Initialization completed`)
  } catch (error: any) {
    logger.error(error.message)
  }
}

run()
