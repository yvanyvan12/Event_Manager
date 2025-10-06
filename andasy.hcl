# andasy.hcl app configuration file generated for events-manager on Monday, 06-Oct-25 16:20:54 CAT
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "events-manager"

app {

  env = {}

  port = 80

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "events-manager"
  }

}
