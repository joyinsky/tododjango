DEPENDENCIES_FILE=requirements/ubuntu-dependencies.txt

install-dependencies:
	cat $(DEPENDENCIES_FILE) | xargs apt-get install -y
	sh requirements/otherdependencies.sh
