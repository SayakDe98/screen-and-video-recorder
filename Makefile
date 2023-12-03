build-and-run-dev:
	cd frontend && make build  && cd ../backend && make build && cd .. && docker-compose up
run-dev:
	docker-compose up